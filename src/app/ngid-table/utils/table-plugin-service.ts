import { TablePluginModel } from '../model/table-plugin.model';
import * as allTablePlugins from '../plugins';
export class TablePluginService {
  public static instance: TablePluginService;
  public pluginMap: Map<string, TablePluginModel>;

  constructor() {
    this.pluginMap = new Map();
  }

  public static create(): TablePluginService {
    if (!this.instance) {
      this.instance = new TablePluginService();
      Object.keys(allTablePlugins).map((key: string) => {
        const plugin: TablePluginModel = (allTablePlugins as any)[key];
        this.instance.pluginMap.set(plugin.name, plugin);
      });
    }
    return this.instance;
  }
}
