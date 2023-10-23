const Set = require("../models/Set")
const cyrillicToTranslit = require('cyrillic-to-translit-js')
class SetController{
    async createSet(req,res){
        try{
            console.log(req.body)
            const {name, description} = req.body


            const alias = cyrillicToTranslit().transform(name,"_")

            const candidateName = await Set.findOne({name:name})
            const candidateAlias = await Set.findOne({alias: alias})
            if (candidateName || candidateAlias){
                return res.status(400).json({message:`Set with name ${name} already exist`})
            }

            const set = new Set({name, description, alias})
            await set.save()
            return res.json({message:"Set was created", data:name})
        }catch (e){
            res.send({message:"Server error"})
        }
    }
    async getSets(req,res){
        try{
            const sets = await Set.find()
            return res.json(sets)
        }catch (e) {
            return res.status(500).json({message:"Server error"})
        }
    }
    async deleteSet(req,res){
        try{
            const deleteS = await Set.deleteOne({_id: req.query.id})

            if (!deleteS){
                res.status(404).json({message:"Set not found"})
            }else {
                res.send("Set has been removed")
            }
        }catch (e) {
            return res.status(505).json({message:"Server error"})
        }
    }
    async updateSet(req,res){
        try{
            const {id,name,description} = req.body
            const alias = cyrillicToTranslit().transform(name, "_")

            const updateAliase = await Set.findById(id)

            if (!updateAliase){
                return res.status(400).json({message:`Set with name ${name} not exist`})
            }
            await Set.findByIdAndUpdate(id,{name:name, description:description, alias: alias},{new:true})
            return res.json({message:"Set was update", data:name})

        }catch (e) {
            return res.status({message:"Server error"})
        }
    }

}

module.exports = new SetController()