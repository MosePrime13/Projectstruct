pipeline {
    agent any 
    stages {
        stage('--clone--') { 
            steps {
                // REMOVE PREVIOUS FILE 
                sh "rm -rf Fastmig"
                // CLONE PROJECT
                sh "git clone https://xanda.tospay.net/Microservices/fastmig.git"
            }
        }
        stage('--test--') { 
            steps {
                // RUN TEST
                sh "cd Fastmig && docker-compose up --abort-on-container-exit &&  docker container rm nodetest && docker image rm nodetest"
            }
        }
        stage('--deploy-to-docker-registry--') { 
            steps {
                // BUILD PROD IMAGE
                sh "cd Fastmig"
                // PUSH IMAGE TO DOCKER REGISTRY
                sh ""
            }
        }
    }
}