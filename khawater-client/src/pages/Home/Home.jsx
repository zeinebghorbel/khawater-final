import { useEffect, useState } from "react";
import { Container, Grid } from "semantic-ui-react";
import CustumCard from "../../components/Card/CustumCard";
import CustumMenu from "../../components/Menu/CustumMenu";
import axios from "axios";

const Home = () => {
  const [khawater, setKhawater] = useState([]);
  const token = localStorage.getItem("token");
  const getArticles = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_ENDPONIT}/articles`,
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      setKhawater(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div>
      <CustumMenu />
      <Container>
        <Grid doubling columns={5}>
          {khawater.map((el) => (
            <Grid.Column key={el._id}>
              <CustumCard
                imgSrc={el.cover}
                description={el.content}
                title={el.title}
                articleId={el._id}
              />
            </Grid.Column>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
