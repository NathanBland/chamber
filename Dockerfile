FROM jrottenberg/ffmpeg:latest
FROM wernight/youtube-dl:latest
FROM node:8.10.0-alpine

# copy ffmpeg bins from first image
COPY --from=0 / /
COPY --from=1 / /

RUN youtube-dl -U

# currently failing for some reason?
#RUN apk add youtube-dl