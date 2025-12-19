pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Instalando dependencias y ejecutando build...'
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Ejecutando tests automáticos...'
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Desplegando aplicación...'
                sh '''
                  mkdir -p /var/www/app
                  rm -rf /var/www/app/*
                  cp -r ejemplo.js package.json test /var/www/app/
                '''
            }
        }
    }

    post {
        success {
            echo 'Pipeline completado con éxito. Aplicación desplegada.'
        }
        failure {
            echo 'Pipeline falló.'
        }
    }
}


