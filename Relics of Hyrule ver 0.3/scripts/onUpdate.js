

for each(var entity in player.getEntitiesWithinRange(40))
{
	if(entity.classType == "Arrow")
	{
		if(entity.inBlockID == 14)
		{
			blockCoord = entity.inBlockCoords
			world.setBlockID(blockCoord.x, blockCoord.y, blockCoord.z, 0)
			time.sleep(0.01)
			world.setBlockID(blockCoord.x, blockCoord.y, blockCoord.z, 15)
			entity.setDead();
			entity.isPlayersArrow = false
		}
	}
}