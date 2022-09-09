const express = require('express')
const app = express()
const cors = require('cors') 
const PORT = 8000

 app.use(cors())

const crystals = {
    'sodalite':{
        'crystalname': 'Sodalite',
        'crystalbenefits':'Communication, self expression, truth',
    },
    'clear quartz':{
        'crystalname': 'Clear Quartz',
        'crystalbenefits':'Awareness, Amplifying energy, clarity',
    },
    'rose quartz':{
        'crystalname': 'Rose Quartz',
        'crystalbenefits':'Unconditional love, emotional healing, compassion',
    },
    'aventurine':{
        'crystalname': 'Aventurine',
        'crystalbenefits':'Prosperity, well being, good luck',
    },
    'red jasper':{
        'crystalname': 'Red Jasper',
        'crystalbenefits':'Strength, honesty, stability',
    },
    'snowflake obsidian':{
        'crystalname': 'Snowflake Obsidian',
        'crystalbenefits':'Spiritual protection, transmutation, acceptance',
    },
    'citrine':{
        'crystalname': 'Citrine',
        'crystalbenefits':'Brightness, positive energy, clearing',
    },
    'amethyst':{
        'crystalname': 'Amethyst',
        'crystalbenefits':'Intuition, balance, higher wisdom',
    },
    'amazonite':{
        'crystalname': 'Amazonite',
        'crystalbenefits':'Confidence, self love, creative expression',
    },
    'tigers eye':{
        'crystalname': 'Tigers Eye',
        'crystalbenefits':'Will power, warrior spirit, self-motivation',
    },
    'black tourmaline':{
        'crystalname': 'Black Tourmaline',
        'crystalbenefits':'Protection, banishing, security',
    },
    'carnelian':{
        'crystalname': 'Carnelian',
        'crystalbenefits':'Passion, creativity',
    },
    'hematite':{
        'crystalname': 'Hematite',
        'crystalbenefits':'Courage, inner strength, grounding',
    },
    'malachite':{
        'crystalname': 'Malachite',
        'crystalbenefits':'Wealth, beauty, individuality',
    },
    'lapis lazuli':{
        'crystalname': 'Lapis Lazuli',
        'crystalbenefits':'Psychic vision, celestial energy, Nobility',
    },
    'labradorite':{
        'crystalname': 'Labradorite',
        'crystalbenefits':'Awakening joy, interdimensional travel, innovation',
    },
    'ruby':{
        'crystalname': 'Ruby',
        'crystalbenefits':'Passion, love, strength',
    },
    'aquamarine':{
        'crystalname': 'Aquamarine',
        'crystalbenefits':'Courage, creativity',
    },
    'moonstone':{
        'crystalname': 'Moonstone',
        'crystalbenefits':'Intuition, sensuality, safe travel',
    },
    'bloodstone':{
        'crystalname': 'Bloodstone',
        'crystalbenefits':'Determination, confidence',
    },
    'invalid crystal':{
        'crystalname': 'This crystal does not exist in database',
        'crystalbenefits':'Kindly enter a valid crystal.',
    }

}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:crystalName', (request,response)=>{
    const crystalName = request.params.crystalName.toLowerCase()
    if(crystals[crystalName]){
        response.json(crystals[crystalName])
    }else{
        response.json(crystals['invalid crystal'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})