export async function test(req, res) {
	console.log('Las rutas funcionan correctamente');
	return res.status(200).send('服务器已经部署成功! ');
}