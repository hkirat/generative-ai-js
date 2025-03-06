import { BaseImageParams, ImageModelParams, SingleRequestOptions } from "../../types";
import { RequestOptions } from "../server";
import { generateImages } from "../methods/generate-image";

export class ImageModel {
    model: string;
    modelParams: ImageModelParams;

    constructor(
        public apiKey: string,
        modelParams: ImageModelParams,
        private _requestOptions: RequestOptions = {},
    ) {
        this.model = modelParams.model;
        this.modelParams = modelParams;
    }

    async generateImages(prompt: string, requestConfig?: BaseImageParams, requestOptions?: SingleRequestOptions) {
        const params: ImageModelParams = {
            model: this.model,
            ...requestConfig,
        }

        return generateImages(this.apiKey, this.model, {
            instances: [{prompt: prompt}],
            parameters: {
                ...this.modelParams,
                ...params,
            },
        }, requestOptions);
    }
}