const express = require('express')
const app = express()
const cors = require('cors') 
const PORT = 8000

 app.use(cors())

const crystals = {
    'Sodalite':{
        'crystalname': 'Sodalite',
        'crystalbenefits':'Communication, self expression, truth',
    },
    'Clear Quartz':{
        'crystalname': 'Clear Quartz',
        'crystalbenefits':'Awareness, Amplifying energy, clarity',
    },
    'Rose Quartz':{
        'crystalname': 'Rose Quartz',
        'crystalbenefits':'Unconditional love, emotional healing, compassion',
    },
    'Aventurine':{
        'crystalname': 'Aventurine',
        'crystalbenefits':'Prosperity, well being, good luck',
    },
    'Red Jasper':{
        'crystalname': 'Red Jasper',
        'crystalbenefits':'Strength, honesty, stability',
    },
    'Snowflake Obsidian':{
        'crystalname': 'Snowflake Obsidian',
        'crystalbenefits':'Spiritual protection, transmutation, acceptance',
    },
    'Citrine':{
        'crystalname': 'Citrine',
        'crystalbenefits':'Brightness, positive energy, clearing',
    },
    'Amethyst':{
        'crystalname': 'Amethyst',
        'crystalbenefits':'Intuition, balance, higher wisdom',
    },
    'Amazonite':{
        'crystalname': 'Amazonite',
        'crystalbenefits':'Confidence, self love, creative expression',
    },
    'Tigers Eye':{
        'crystalname': 'Tigers Eye',
        'crystalbenefits':'Will power, warrior spirit, self-motivation',
    },
    'Black Tourmaline':{
        'crystalname': 'Black Tourmaline',
        'crystalbenefits':'Protection, banishing, security',
    },
    'Carnelian':{
        'crystalname': 'Carnelian',
        'crystalbenefits':'Passion, creativity',
    },
    'Hematite':{
        'crystalname': 'Hematite',
        'crystalbenefits':'Courage, inner strength, grounding',
    },
    'Malachite':{
        'crystalname': 'Malachite',
        'crystalbenefits':'Wealth, beauty, individuality',
    },
    'Lapis Lazuli':{
        'crystalname': 'Lapis Lazuli',
        'crystalbenefits':'Psychic vision, celestial energy, Nobility',
    },
    'Labradorite':{
        'crystalname': 'Labradorite',
        'crystalbenefits':'Awakening joy, interdimensional travel, innovation',
    },
    'Ruby':{
        'crystalname': 'Ruby',
        'crystalbenefits':'Passion, love, strength',
    },
    'Aquamarine':{
        'crystalname': 'Aquamarine',
        'crystalbenefits':'Courage, creativity',
    },
    'Moonstone':{
        'crystalname': 'Moonstone',
        'crystalbenefits':'Intuition, sensuality, safe travel',
    },
    'Bloodstone':{
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