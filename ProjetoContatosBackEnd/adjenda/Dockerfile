FROM maven:3.9.4-eclipse-temurin-21-alpine AS build
WORKDIR /home/app/ProjetoContatosBackEnd/adjenda
COPY . .
RUN mvn -v
RUN mvn -f /home/app/ProjetoContatosBackEnd/adjenda/pom.xml clean package


#Step 2 - Run backend
FROM alpine/java:21-jdk
WORKDIR /app
COPY --from=build /home/app/ProjetoContatosBackEnd/adjenda/target/*.jar /app/app.jar
VOLUME /tmp
EXPOSE 80:8080
ENTRYPOINT ["java", "-jar", "/app/app.jar"]