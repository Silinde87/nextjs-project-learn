// https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
	res.status(200).json({ text: 'Hello' });
}


// tips: https://nextjs.org/docs/basic-features/data-fetching/get-static-props#write-server-side-code-directly