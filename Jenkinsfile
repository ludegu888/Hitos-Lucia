pipeline {
    agent any

    stages {
        stage('Test') {
            steps {
                echo 'Ejecutando tests automáticos...'
                sh 'npm install'           // Instala dependencias
                sh 'npm test'              // Ejecuta los tests
            }
            post {
                always {
                    junit '**/test-results/**/*.xml' // Reportes de tests (Jest, JUnit)
                }
            }
        }

        stage('Build') {
            steps {
                echo 'Construyendo aplicación...'
                sh 'npm run build'
            }
        }
    }
}
