pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('Dependencies') {
            steps {
                sh 'npm i'
            }
        }
        stage('e2e Tests') {
            steps {
                sh 'NO_COLOR=1 npx cypress run'
            }
        }
    }
}
