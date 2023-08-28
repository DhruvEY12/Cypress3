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
                sh 'npx cypress run --reporter json'
            }
        }
    }
}
