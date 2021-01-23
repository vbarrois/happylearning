FROM node:slim

ARG SERVER_PORT
ARG NODE_ENV

ENV NODE_ENV ${NODE_ENV}
ENV SERVER_PORT ${SERVER_PORT}

ADD ./startup.sh /usr/src/startup.sh
RUN chmod +x /usr/src/startup.sh

WORKDIR /usr/src/

CMD ["/usr/src/startup.sh"]