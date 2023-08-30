import { Properties } from "./Properties";
import { Pagination } from "./Pagination";

export class PropertiesResponse {
    pagination: Pagination;
    content: Properties[];
}