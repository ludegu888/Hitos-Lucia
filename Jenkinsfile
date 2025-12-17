pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Forzando fallo a propósito'
                sh 'exit 1'  // Esto hace que la etapa falle
            }
        }
    }
}

