const Client = require('ssh2-sftp-client')
const ora = require('ora')
const path = require('path')
const glob = require('glob')
const sftp = new Client()
// 本地目录
const localPath = path.join(__dirname, '../dist').replace(/\\/g, '/')
// 远程目录
const remotePath = '/www/sneptune/admin'
// 允许上传的文件扩展名
const allowFiles = ['html', 'css', 'js', 'png', 'jpg', 'jpeg', 'gif', 'eot', 'svg', 'ttf', 'woff', 'ico']

const spinner = ora('开始上传...').start()
// 所有要上传的文件数组
let allFiles = []

// 连接 sftp
sftp.connect({ 
    host: '47.105.48.180',
    port: '22',
    username: 'root',
    password: '****'
}).then(() => {
    console.log('连接服务器成功')
    allFiles = glob.sync(`${localPath}/**/*.{${allowFiles.join(',')}}`)
    return Promise.all(
        allFiles.map(localFile => {
            let remoteFile = localFile.replace(localPath, remotePath)
            return sftp.put(localFile, remoteFile)
        })
    )
}).then(() => {
    console.log(allFiles);
    spinner.succeed('上传完成')
    process.exit()
}).catch(err => {
    spinner.fail(err)
    spinner.fail('上传失败')
    process.exit()
})
