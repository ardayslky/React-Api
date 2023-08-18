import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Usercard from "./Componens/Usercard";

function App() {
  const [users, setUsers] = useState([]);
  const [eror, setEror] = useState(false);
  const [loading, setLoading] = useState(true);

  let userURL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    veriYükle();
  }, []);

  function veriYükle() {
    axios
      .get(userURL)
      .then((item) => {
        console.log(item.data);
        setUsers(item.data);
      })
      .catch(() => {
        setEror(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return (
    <div>
      <h1>Kullanıcılar</h1>

      {eror && <h2>Sayfa Yüklenemedi ...</h2>}
      {loading && <h2>Yükleniyor...</h2>}
      {users.map((item) => (
        <Usercard
          email={item.email}
          fullname={item.fullname}
          username={item.username}
          company={item.company.name}
          location={item.address.city}
        ></Usercard>
      ))}
    </div>
  );
}

export default App;
