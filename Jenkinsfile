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
                sh 'npx jest --reporters=default --reporters=jest-junit'
            }
            post {
                always {
                    junit 'test-results/results.xml'
                }
                unsuccessful {
                    echo 'Los tests han fallado. Pipeline detenido.'
                    error('Pipeline detenido por fallo en tests.')
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Desplegando aplicación localmente...'
                sh 'mkdir -p /var/www/app'
                sh 'cp -r * /var/www/app/'
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

