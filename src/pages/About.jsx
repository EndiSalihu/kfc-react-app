import { Title, Text } from '../components/index'

// images
import chickenMade from '../assets/chicken-made.jpg';
import hardWay from '../assets/hard-way.jpg';
import cooking from '../assets/cooking.jpg';

const About = () => {
  return (
    <section className="flex flex-col items-center text-center">
      <div>
        <Title text={'we make our chicken the hard way'} />
        <img src={chickenMade} alt="how-its-made" />
        <Text
          description={
            'Hand breaded, freshly prepared and Finger Lickin` Good®! Our chicken isn`t made the fast way or the easy way.'
          }
        />
      </div>

      <div>
        <Title text={'it`s made the hard way'} />
        <Text
          description={
            'Each fresh batch of the world`s best chicken starts with our cooks inspecting each individual piece.'
          }
        />
        <img src={hardWay} alt="hard-way" />

        <div className="my-10">
          <Text
            description={
              <>
                Then, our fresh chicken is carefully rolled 7 times in our
                secret blend of 11 herbs & spices
                <br />
                before being rocked 7 times and then pressure cooked at 171°C
                temperature
                <br />
                to absorb all the great taste we`re known for around the world.
              </>
            }
          />
        </div>

        <div>
          <img src={cooking} alt="cooking-food" />
          <Text 
            description={
              "We could find an easier way to make chicken, but then we couldn't put our name on it."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default About;
