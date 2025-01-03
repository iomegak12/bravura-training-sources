FROM openjdk:17-jdk

EXPOSE 8080

WORKDIR /app

COPY build/libs/professionalrestservices-0.1.war /app/professionalrestservices-0.1.war

CMD ["java", "-Dgrails.env=prod", "-jar", "/app/professionalrestservices-0.1.war"]