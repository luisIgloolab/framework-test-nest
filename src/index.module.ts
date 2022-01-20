import {Module} from "./core/utils/decorators/constructor";
import {IndexService} from "./infrastructure/services/index.service";

@Module({
    imports: [],
    providers: [IndexService],
})
class IndexModule {}


const indexModule = new IndexModule();