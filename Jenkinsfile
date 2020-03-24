pipeline {
    agent {
        docker {
            image 'node:12.13.0'
            args '-p 3000:3000' 
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Deploy') {
            steps {
                sh 'npm start'
            }
        }
    }
} 
