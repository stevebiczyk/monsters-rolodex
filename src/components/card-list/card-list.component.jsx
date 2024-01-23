import { Component } from "react";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div>
        {monsters.map((monster) => {
          return (
            <div>
              <h1 key={monster.id}>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
