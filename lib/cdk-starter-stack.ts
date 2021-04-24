import * as dynamodb from '@aws-cdk/aws-dynamodb';
import * as s3 from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';

export class MyCdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const s3Bucket = new s3.Bucket(this, 'avatars-bucket', {
      // 👇 set removalPolicy to DESTROY
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    const table = new dynamodb.Table(this, 'my-table', {
      partitionKey: {name: 'todoId', type: dynamodb.AttributeType.NUMBER},
      // 👇 set removalPolicy to DESTROY
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
  }
}
