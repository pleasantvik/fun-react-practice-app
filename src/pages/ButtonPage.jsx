import { Button } from "components/Button";
import { GoBell } from "react-icons/go";

export const ButtonPage = () => {
  return (
    <div>
      <div>
        <Button
          className="space-x-5 mb-5"
          primary
          rounded
          outline
          onClick={() => console.log("Click")}
        >
          <GoBell />
          Primary
        </Button>
      </div>
      <div>
        <Button warning>
          <GoBell />
          Warning
        </Button>
      </div>
      <div>
        <Button secondary>Secondary</Button>
      </div>
      <div>
        <Button danger>Danger</Button>
      </div>
      <div>
        <Button success>Success</Button>
      </div>
    </div>
  );
};
