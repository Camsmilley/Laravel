import React from 'react';
import img from '../assets/love.jpg';
import img2 from '../assets/love2.jpg';
import img3 from '../assets/bottle.jpg';
import img4 from '../assets/love4.jpg';
import img5 from '../assets/love5.jpg';
import img6 from '../assets/love6.jpg';
import img7 from '../assets/love7.jpg';
import img8 from '../assets/love8.jpg';
import img9 from '../assets/love9.jpg';
import './Safety.css';
import Header from './Header';
import Footer from './Footer';

const Data = [
    {
        id:1,
        imgSrc: img,
        character: 'Know your environment. ',
        description: 'Whether you are hiking the Everglades, or the back yard, you must know your   environment. Any time humans interact with nature, there is a chance of injury.   Its best to know which plants and animals in the area should be avoided. Its also important to be very aware of weather. Research the weather  patterns in your park before the hike. This way you can avoid the camping  nightmare of waking up in a flooded tent. Although swimming may be on the adventure agenda, most hikers find they prefer to do it during the day and with  prior planning.. '
    },

    {
        id:2,
        imgSrc: img2,
        character: 'Always start small. ',
        description: 'The first hike of the season should be a short excursion. Those who are just  learning about surviving a night in the wilderness should not be very far from their basecamp (home, car, campsite). Until a hiker completes their first aid training, they should never venture very far from proper medical attention. Its  also good precaution to camp close enough to home for a quick sprint away from a  rummaging raccoon or a spooky snake, or even a midnight trip to the restroom. '
    },

    {
        id:3,
        imgSrc: img3,
        character: 'Know your water.',
        description: 'We all have visions of drinking from the crystal clear mountain brook  babbling over the rocks after a hot hike, but beware of the water! Although it  appears safe and clean to drink, most natural water sources have huge amounts of  bacteria that can make brave adventurers very sick. Be sure to bring your own  water or water filter for drinking. Although it may be fine to wash in the  stream, a smart hiker will only drink purified water. '
    },

    {
        id:4,
        imgSrc: img4,
        character: 'Be smart with food. ',
        description: 'A backpack dinner of a smashed ham sandwich, chip crumbs, and a half of a  granola bar can be compared to fine gourmet cooking when exploring the wilderness. After a hard days hike, many adventurers thank their lucky stars  for a feast from plastic, so good planning should surround the brave  backpackers dinner. Whether hiking in an area known to have bears or sloshing  through streams, its a good idea to keep all food in tightly sealed containers.  If animals can smell your rations, they may want to explore further, and a hiker  is generally very disappointed to find a fat, happy squirrel in their pack,  rather than a salami sandwich.'
    },

    {
        id:5,
        imgSrc: img5,
        character: 'Have a fire source.  ',
        description: 'In ancient  civilizations of hunters and gatherers, one person was appointed the title of  fire-bearer, and charged with the extremely important task of creating heat. The  fire was central to the camp, keeping everyone warm and cooking a meal, so the  fire-bearers job was an important responsibility assigned only to the most  intelligent, cautious, and mature members of the group. We recommend choosing  your fire-bearer carefully and wisely to avoid forest fires and injury.  Whatever the weather, a hardened hiker will be able to spark a fire. This is  a job for either the guide, the guardian, or Mom and Dad. The fire-bearer should be well-versed in fire safety regulations, should know  where they can build fires in the park, and should NEVER leave the fire unattended. To get more information ask your local park ranger for fire-building  advice. They will know whether its the legal season for building fires, they  will be able to direct your crew to a campsite with an existingfire ring, and  they will probably even be able to tell you which wood you should burn for a  cozy campfire.'
    },

    {
        id:6,
        imgSrc: img6,
        character: 'Learn First Aid and carry a kit.',
        description: 'The best medicine for adventurers is that of prevention. By avoiding injury in the wild, everyone has fun and no one ends up in the hospital instead of  swimming in the lake. But hikers cant plan for every instance, and sometimes  there are accidents.'
    },

    {
        id:7,
        imgSrc: img7,
        character: 'Know  what to do  in case of an emergency.',
        description: 'By using first aid, a quick-thinking kid can save a  friends life. First aid training teaches ways to overcome stress in an  emergency and react with the courage of a hero. It also gives the knowledge of  how to deal with specific types of injuries. '
    },

    {
        id:8,
        imgSrc: img8,
        character: 'Always carry out what you carry in. ',
        description: 'The first rule with interacting with the environment is: Leave it as you  found it. This rule applies to the trees, the earth, the animals, the campsite, and even the flowers. The caretakers of the wilderness areas and parks have dedicated their lives to preserving what one careless hand could destroy in a second. Show repect to Mother Nature. Carry out all of the garbage you carry in,  dont feed the animals, and leave only footsteps when you go. If everyone works  together to preserve parks, wilderness, and other hiking areas, we will all be  able to enjoy breathtaking hiking adventures in the future as well. .'
    },

    {
        id:9,
        imgSrc: img9,
        character: 'Never Hike Alone',
        description: 'NEVER- under any circumstances venture into the woods by yourself. Outdoor  adventures are fun for the family, but hiking is only a group sport. The chances  of becoming lost, sustaining injury, or losing supplies is much higher when  alone, making the sport extemely dangerous. Always go with a group, tell someone  where you are going and when you plan to return, and check in at the ranger  station so they are aware of your location.'
    } 

]

const Safety = () => {
    return(
        <>
        <Header/>
        <section className='main container section'>
            <div className='secTitle'>
                <div className='title'>
                    <h1>How to prepare for a hike</h1>
                
                <small  className='text-dark text-start'>Check out these hiking tips and learn how to plan and prepare for a safe and enjoyable experience.</small>
                    <h4  className='text-dark text-start'>Remember: you are responsible for your own safety. You need to be self-sufficient at all times, even in an emergency situation. </h4>
                    </div>
                <div className='secContent grind text-start'>
                {
                    Data.map(({id ,imgSrc ,character ,description}) =>{
                        return(
                            <div key={id}className='singleDestination'>
                                <div className='imageDiv'>
                                    <img src={imgSrc} alt={character}></img>
                                </div>
                            <div className='cardInfo'>
                                <h4 className='destTitle'>{character}</h4>

                                <div className='desc'>
                                    <p>{description}</p>
                                </div>
                            
                            </div>
                            </div>
                        )
                    }

                    
                )
                }
                </div>
            </div>
        </section>
        <Footer/>
        </>
)
}

export default Safety;