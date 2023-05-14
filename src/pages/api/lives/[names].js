import twitch from 'simple-twitch-info';


export default async function handler(req, res) {
    const pathName = req.query
    const names = pathName.names.split(',');
    console.log(names);
    const result = []

    for (let name of names) {
        const info = await twitch.getStream(name);
        result.push(Number(info.live));
    }
    res.status(200).end(result.join(''))
}

