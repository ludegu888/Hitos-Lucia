pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Iniciando build...'
                sh 'npm instalar'
                sh 'npm run build'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: '**/dist/**', allowEmptyArchive: true
            junit '**/test-results/**/*.xml'
        }
    }
}
