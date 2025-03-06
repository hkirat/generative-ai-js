import { GenerateImageRequest, SingleRequestOptions, GenerateImagesResult } from "../../types";
import { makeModelRequest, Task } from "../requests/request";

export async function generateImages(
    apiKey: string,
    model: string,
    params: GenerateImageRequest,
    requestOptions?: SingleRequestOptions,
  ): Promise<GenerateImagesResult> {
    const response = await makeModelRequest(
      model,
      Task.GENERATE_IMAGES,
      apiKey,
      /* stream */ false,
      JSON.stringify(params),
      requestOptions,
    );
    return response.json();
  }
  