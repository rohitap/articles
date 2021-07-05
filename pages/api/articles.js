import Articles from '../../data/articles'

export default function ArticlesHandler(req, res) {
  if (req.method === 'POST') {
    Articles.push({...req.body})
    res.status(200).json({
      data: req.body
    })
  } else {
    const lastFiveArticles = Articles.slice(Math.max(Articles.length - 5, 0))
    res.status(200).json({
      data: lastFiveArticles
    })
  }
}