pipeline {
    agent any 
    stages {
        stage('--clone--') { 
            steps {
                // REMOVE PREVIOUS FILE 
                sh "rm -rf Fastmig"
                // CLONE PROJECT
                sh "git clone https://github.com/MosePrime13/Node-Docker-Jenkins.git"
            }
        }
        stage('--test--') { 
            steps {
                // RUN TEST
                sh "cd Fastmig/test && docker-compose up --abort-on-container-exit && docker image rm nodetest"
            }
        }
        stage('--deploy-to-docker-registry--') { 
            steps {
                // CREATE PROD IMAGE
                sh ""
                // PUSH IMAGE TO DOCKER REGISTRY
                sh ""
            }
        }
    }
}