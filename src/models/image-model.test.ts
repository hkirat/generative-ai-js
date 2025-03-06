
import { restore, stub } from "sinon";
import { getMockResponse } from "../../test-utils/mock-response";
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { ImageModel } from "./image-models";
import * as request from "../requests/request";
import { expect } from "chai";

describe("ImageModel", () => {
  it("Image model returns the right length of predictions", async () => {
    const genModel = new ImageModel(
      "apiKey",
      {
        model: "my-model",
      },
    );
    const mockResponse = getMockResponse(
      "image-response.json",
    );
    stub(request, "makeModelRequest").resolves(
      mockResponse as Response,
    );
    
    const response = await genModel.generateImages("Cat image", {
      numberOfImages: 2
    });
    expect(response.predictions?.length).eq(2);
    restore();
  });
});
