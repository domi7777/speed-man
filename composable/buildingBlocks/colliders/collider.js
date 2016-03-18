/**
 * Created by nd on 15/03/2016.
 */

/**
 * Created by nd on 7/03/2016.
 */

Collider.prototype = new Composable();
Collider.prototype.constructor = Collider;
Collider.ComponentTypes = {
    LOCATOR:"Locator"
}
function Collider(parent,offsetX,offsetY) {
    if (offsetX != null && offsetY != null) {
        console.log("Collider() with full params");
        Composable.call(this);

        var collider = this;
        var componentRoleHelper = new ComponentRoleHelper(collider);

        collider.addToComposable = addToComposable;


        collider.addLocator = addLocator;



        /*compose base gameItem*/
        collider
            .addComponent(new OffsetLocator(collider, offsetX, offsetY, parent))
            .doWiring();


        function addLocator(locator){
            var componentsForRole = componentRoleHelper.getComponentListForRole(GameItem.ComponentTypes.LOCATOR);
            componentRoleHelper.generateComponentListGetterForRole(GameItem.ComponentTypes.LOCATOR);

            /*this is for linking zoneLocator and mobileLocator to previously added locator*/
            if (componentsForRole.length > 0){
                locator.setOriginLocator(componentsForRole[componentsForRole.length-1]);
            }

            componentsForRole.push(locator);
        }






        function addToComposable(composable){
            if (composable.addCollider){
                composable.addCollider(collider);
            }
        }
    }
}

