FROM node:8.10.0-alpine
EXPOSE 3000 9229
COPY . /home/app
WORKDIR /home/app
RUN apk add dos2unix --update-cache --repository http://dl-3.alpinelinux.org/alpine/edge/community/
RUN find . -type f -print0 | xargs -0 dos2unix
RUN npm install
RUN sed -i 's/\r$//' /home/app/scripts/start.sh  && \ 
  chmod +x /home/app/scripts/start.sh
CMD  ["/home/app/scripts/start.sh"]