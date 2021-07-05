import { useEffect } from 'react'
import ApiClient from '../../../utils/axios'
import useAsync from '../../../hooks/useAsync'

import { CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'

const ArticlesList = () => {
  const { isLoading, err, res: articleList, asyncFunc: getArticles } = useAsync(ApiClient.getArticles)
  useEffect(() => {
    getArticles()
  }, [])
  const classes = {}
   if (articleList && articleList.data) {
    return (
      <>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Title</TableCell>
                <TableCell align="right">Author</TableCell>
                <TableCell align="right">Intro</TableCell>
                <TableCell align="right">Date</TableCell>
              </TableRow>
            </TableHead>
              <TableBody>
                {(articleList?.data).map((article) => (
                  <TableRow key={article.date + article.intro}>
                    <TableCell align="right">{article.title}</TableCell>
                    <TableCell align="right">{article.author}</TableCell>
                    <TableCell align="right">{article.intro}</TableCell>
                    <TableCell align="right">{article.date}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    )
  } else {
    return (
      <CircularProgress />
    )
  }
}

export default ArticlesList