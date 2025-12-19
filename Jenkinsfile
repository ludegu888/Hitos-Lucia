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
        echo '=== DEPLOY ==='
        sh '''
          echo "WORKSPACE:"
          pwd
          echo "CONTENIDO DEL WORKSPACE:"
          ls -la

          mkdir -p /var/www/app
          rm -rf /var/www/app/*

          echo "COPIANDO ARCHIVOS..."
          cp -r ./* /var/www/app/

          echo "CONTENIDO DESPLEGADO:"
          ls -la /var/www/app
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

