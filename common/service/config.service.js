let BASE_URL = ''


if (process.env.NODE_ENV == 'development') {
    BASE_URL = 'http://localhost:6060/jeecg-boot' // 开发环境
} else {
	BASE_URL = 'http://ctyjr.2009xc.com:6060/jeecg-boot' // 生产环境
}
let staticDomainURL = BASE_URL+ '/sys/common/static';

const configService = {
	apiUrl: BASE_URL,
	staticDomainURL: staticDomainURL
};

export default configService