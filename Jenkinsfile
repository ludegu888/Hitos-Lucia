pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Forzando fallo a propósito'
                sh 'npm run build123'   
                sh 'exit 1'  
            }
        }
    }
}

