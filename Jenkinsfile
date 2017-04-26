node {
    currentBuild.result = "SUCCESS"

    try {
        stage('Checkout') {
            checkout scm
        }
        wrap([$class: 'Xvfb']) {
            stage('Integration tests') {
                withEnv(["PATH+VNODE=/var/jenkins_home/.nvm/versions/node/v6.9.4/bin"]) {
                    sh('npm install && npm test')
                }
            }
        }
    } catch (e) {
        currentBuild.result = "FAILED"
        throw e;
    } finally {
        stage('Archive Test Output') {
            archiveArtifacts artifacts: '**/test_output/'
        }
    }
}