//*Break grass with sword, get iten maybe*//
if (hitBlock != null)
{
    var hitBlockID = world.getBlockID(hitBlock.x, hitBlock.y, hitBlock.z);
    
    if (hitBlockID == 31)
    {
        world.setBlockID(hitBlock.x, hitBlock.y, hitBlock.z, 0);

        var RNGESUS = Math.floor(Math.random() * 100);
        if (RNGESUS < 4)
        {
            player.dropItem(Item(459)); //heart
        }
        else if (RNGESUS < 8)
        {
            player.dropItem(Item(262)); //arrow
        }
        else if (RNGESUS < 9)
        {
            player.dropItem(Item(266)); //gold coin
        }

        
    }

}