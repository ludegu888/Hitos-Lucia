pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Forzando fallo a propósito'
                sh 'exit 1'   // Este comando siempre falla
            }
        }
    }
}
