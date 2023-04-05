FROM node:18.15-alpine3.17 as builder

WORKDIR /app

RUN mkdir ./self_signed_certs
RUN --mount=type=secret,id=PRIVATE_CERTIFICATE_CERT cat /run/secrets/PRIVATE_CERTIFICATE_CERT > ./self_signed_certs/cert.pem
RUN --mount=type=secret,id=PRIVATE_CERTIFICATE_KEY cat /run/secrets/PRIVATE_CERTIFICATE_KEY > ./self_signed_certs/key.pem

COPY ./package.json ./package-lock.json ./
RUN npm install
COPY ./src ./src
COPY ./static ./static
COPY ./.svelte-kit ./.svelte-kit
COPY ./*.* ./
RUN ls -la
RUN npm run build

FROM nginx:1.23-alpine3.17

RUN mkdir -p /etc/nginx/ssl
COPY --from=builder /app/self_signed_certs/cert.pem /etc/nginx/ssl/cert.pem
COPY --from=builder /app/self_signed_certs/key.pem /etc/nginx/ssl/key.pem

# Copy the nginx configuration file
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copy the build output
COPY --from=builder /app/build /usr/share/nginx/html

# Expose ports
EXPOSE 80
EXPOSE 443

# Run nginx
CMD ["nginx", "-g", "daemon off;"]
