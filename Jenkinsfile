pipeline {
    agent any

    tools {nodejs "node"}

    stages {
    
        stage('e2e Tests') {
            steps {
                sh 'NO_COLOR=1 npx cypress run --reporter json'
            }
        }
    }
}
