pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Iniciando build...'
                sh 'npm install'
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
