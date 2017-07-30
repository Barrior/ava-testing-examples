import test from 'ava';
import request from 'request';

test.cb('http api testing', t => {
    const options = {
        baseUrl: 'https://api.github.com',
        url: '/users/Barrior',
        timeout: 5 * 1000,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36'
        }
    };

    request.get(options, (err, res, body) => {
        if (err) t.fail('服务器响应超时！');

        if (res && res.statusCode === 200) {
            body = JSON.parse(body);
            t.is(body.login, 'Barrior');
        } else {
            t.fail('无响应内容或状态码错误！');
        }

        t.end();
    });
});
