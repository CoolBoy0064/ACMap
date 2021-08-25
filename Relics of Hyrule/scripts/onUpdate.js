

var pinv = player.getInventory()


grapSearch = player.getEntitiesWithinRange(40);
for(i=0 ; i < grapSearch.length ; i++) {
	egrap = grapSearch[i];
	
	if(egrap.getClassType() == "Hookshot") {
		gpos = egrap.getPosition();
		for(j=-1 ; j <=1 ; j++) {
			for(k=-1 ; k<=1 ; k++) {
				if(//world.getBlockID(gpos.x+j, gpos.y, gpos.z+k) == 17 || //birch and spruce
				world.getBlockID(gpos.x+j, gpos.y, gpos.z+k) == 5 || 
				
					world.getBlockID(gpos.x+j, gpos.y, gpos.z+k) == 214 //special wood
					
				) {
					gslot = pinv.getSlotContainingItem(458);
					pinv.emptySlot(gslot);
					pinv.setSlot(gslot, Item(458));
		
				}			
			}	
		}	
		npcSearch = egrap.getEntitiesWithinRange(3);
		for(j=0 ; j < npcSearch.length ; j++) {
			enpc = npcSearch[j];
			if(enpc.getClassType() == "NPC") {
				gslot = pinv.getSlotContainingItem(458);
				pinv.emptySlot(gslot);
				pinv.setSlot(gslot, Item(458));
			}
			else if(enpc.getClassType() == "Script") {
				gslot = pinv.getSlotContainingItem(458);
				pinv.emptySlot(gslot);
				pinv.setSlot(gslot, Item(458));
}	}	}	}