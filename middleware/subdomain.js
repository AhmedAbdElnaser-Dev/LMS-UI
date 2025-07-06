export default function ({ req, route }) {
	console.log("subdomain")
	// if (process.server) {
	// 	const host = req.headers.host || 'localhost:3000';
	// 	const parts = host.split('.');
	// 	const subdomain = parts.length > 2 ? parts[0] : 'default';
	// 	route.meta = route.meta || {};
	// 	route.meta.subdomain = subdomain;
	// }
}