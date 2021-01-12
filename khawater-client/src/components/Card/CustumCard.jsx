import axios from "axios";
import { useHistory } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import { Button, Card, Image } from "semantic-ui-react";

const CustumCard = ({ imgSrc, description, title, articleId }) => {
  const history = createBrowserHistory({ forceRefresh: true });

  const handleDeletedArticle = (article_id) => {
    axios
      .delete(`${process.env.REACT_APP_API_ENDPONIT}/articles/${article_id}`)
      .then((response) => {
        console.log(response.data);
        history.push("/home");
      })
      .catch((err) => console.error(err));
  };

  return (
    <Card>
      <Image src={imgSrc} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>{description}.</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button
          icon="trash"
          color="red"
          onClick={() => {
            handleDeletedArticle(articleId);
          }}
        />
      </Card.Content>
    </Card>
  );
};

export default CustumCard;
